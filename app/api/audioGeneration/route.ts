import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.json();
  if(!data.inputs){
   throw new Error('Something is missing here!! Supply the baseURL or inputs')
  }
  if(!process.env.HF_TOKEN){
    throw new Error('The Hugging face token is missing here!')
  }
  
  const baseURL = 'https://api-inference.huggingface.co/models/facebook/fastspeech2-en-ljspeech'
  try {
    const response = await fetch(
      baseURL,
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
    if(!response.ok){
        throw new Error('Request failed')
    }

    const result = await response.arrayBuffer();
    console.log("AudioResult",result)
    // Assuming the response contains a URL or audio data, we need to fetch the audio as a blob
    // const audioResponse = await fetch(result.audio_url); // If the result contains a direct audio URL
    // const audioBlob = await audioResponse.blob();

    return new NextResponse(result, {
      status: 200,
      headers: { 'Content-Type': 'audio/mpeg' },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: 'Failed to generate audio' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
