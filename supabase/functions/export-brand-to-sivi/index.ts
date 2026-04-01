import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "@supabase/supabase-js/cors";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const SIVI_API_KEY = Deno.env.get("SIVI_API_KEY");
    if (!SIVI_API_KEY) {
      return new Response(
        JSON.stringify({ error: "SIVI_API_KEY is not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { brandConfig, logoUrl } = await req.json();

    if (!brandConfig || !logoUrl) {
      return new Response(
        JSON.stringify({ error: "brandConfig and logoUrl are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Map brand-config.json to Sivi API format
    const colors = brandConfig.colors?.primary || {};
    const brandColors: string[] = [];
    for (const key of Object.keys(colors)) {
      if (colors[key]?.hex) brandColors.push(colors[key].hex);
    }

    // Add extended and accent colors
    const extended = brandConfig.colors?.extended || {};
    for (const key of Object.keys(extended)) {
      if (extended[key]?.hex) brandColors.push(extended[key].hex);
    }

    const brandFonts: string[] = [];
    if (brandConfig.typography?.headingFont?.family) {
      brandFonts.push(brandConfig.typography.headingFont.family);
    }
    if (brandConfig.typography?.bodyFont?.family) {
      brandFonts.push(brandConfig.typography.bodyFont.family);
    }

    const siviPayload = {
      brandName: brandConfig.brand || "Veebikool",
      brandDescription: "Veebikool — Eesti suurim e-õppe platvorm ettevõtjatele. Koolitused juhtimise, turunduse, müügi, finantside ja juriidika valdkonnas.",
      brandColors,
      brandFonts,
      brandLogo: logoUrl,
      brandUrl: "https://veebikool.ee",
    };

    console.log("Sending to Sivi:", JSON.stringify(siviPayload));

    const response = await fetch(
      "https://connect.sivi.ai/api/prod/v2/general/set-brand-manual",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "sivi-api-key": SIVI_API_KEY,
        },
        body: JSON.stringify(siviPayload),
      }
    );

    const data = await response.text();
    console.log("Sivi response:", response.status, data);

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: `Sivi API error [${response.status}]: ${data}` }),
        { status: response.status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, data: JSON.parse(data) }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    console.error("Error exporting to Sivi:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: msg }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
