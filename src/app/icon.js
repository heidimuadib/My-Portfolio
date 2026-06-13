import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export const contentType = 'image/png';
export const size = {
  width: 256,
  height: 256,
};

export default function Icon() {
  const imagePath = path.join(process.cwd(), 'public', 'images', 'profile-avatar.png');
  let imageBase64;
  try {
    const imageBuffer = fs.readFileSync(imagePath);
    imageBase64 = `data:image/png;base64,${imageBuffer.toString('base64')}`;
  } catch (e) {
    console.error('Error reading favicon image:', e);
    return new ImageResponse(
      (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#000', borderRadius: '50%' }} />
      ),
      { ...size }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          overflow: 'hidden',
          backgroundColor: 'transparent',
        }}
      >
        <img
          src={imageBase64}
          alt="icon"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
        />
      </div>
    ),
    { ...size }
  );
}
