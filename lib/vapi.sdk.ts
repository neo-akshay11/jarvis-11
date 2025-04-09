import Vapi from "@vapi-ai/web";


const token = process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN;

if (!token) {
  throw new Error("Missing NEXT_PUBLIC_VAPI_WEB_TOKEN in environment variables.");
}

export const vapi = new Vapi(token);


// export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN!);
