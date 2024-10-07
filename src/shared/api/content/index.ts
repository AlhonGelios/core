import { privateConfig } from "@/shared/config/private";
import { FileFetcher } from "./_lib/file-fetcher";
import { ContentParser } from "./_lib/content-parser";
import manifestSchema from "./_schemas/manifest.schema.json";
import { Manifest } from "./_schemas/manifest.schema";

const fileFetcher = new FileFetcher(privateConfig.CONTENT_TOKEN);

const contentParser = new ContentParser();

export const fetchManifest = async () => {
  const text = await fileFetcher.fetchText(
    `${privateConfig.CONTENT_URL}/manifest.yaml`,
  );

  const manifest = await contentParser.parse<Manifest>(text, manifestSchema);

  return manifest;
};
