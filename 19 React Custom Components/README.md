# Custom Components / Reuseable Components

- Image upload Component
- Input
- Button
- Modal

## Image Uploader.

- Basic Component

```javascript
"use client";

import { Trash2, UploadCloud } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";

interface UploadImageProps {
  title?: string;
  fileInputRef?: React.RefObject<HTMLInputElement>;
  image?: File | null | string;
  setImage?: (image: File | null | string) => void;
  uploadImage?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
}

const UploadImage: React.FC<UploadImageProps> = ({
  title,
  image,
  setImage,
  uploadImage,
  error,
}) => {
  const fileInputRef = useRef < any > null;
  return (
    <div>
      {title && <h4 className="title text-base font-semibold">{title}</h4>}
      <div className="mt-4">
        <div
          className={`relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-gray-700 bg-transparent text-center transition-all hover:bg-transparent ${
            !image ? "cursor-pointer" : "cursor-default"
          }`}
          onClick={() => {
            if (!image) {
              fileInputRef && fileInputRef.current ? fileInputRef.current?.click() : {};
            }
          }}>
          {image ? (
            <div
              style={{
                position: "relative",
                height: "100%",
                width: "100%",
              }}>
              <Image
                src={typeof image === "string" ? image : URL.createObjectURL(image)}
                alt="uploaded-img"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
              <Trash2
                onClick={(e) => {
                  e.stopPropagation();
                  setImage && setImage(null);
                }}
                className="w-8 h-8 cursor-pointer text-red-700 bg-white p-1 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          ) : (
            <div className="space-y-1 text-sm">
              <UploadCloud className="mx-auto h-6 w-6" />
              <p>Click to upload your image</p>
              <p className="text-gray-400">PNG, JPG, GIF up to 1MB</p>
            </div>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => uploadImage?.(e)}
        />
      </div>
      {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
    </div>
  );
};

export default UploadImage;
```

- Preview
  ![alt text](image-2.png)
  ![alt text](image-1.png)

- Optimized and Advanced Component

```javascript
"use client";

import { Trash2, UploadCloud } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";

interface UploadImageProps {
  title?: string;
  // fileInputRef?: React.RefObject<HTMLInputElement>;
  image?: File | null | string;
  setImage?: (image: File | null | string) => void;
  // handleClick?: () => void;
  uploadImage?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
}

const UploadImage: React.FC<UploadImageProps> = ({
  title,
  // fileInputRef,
  image,
  setImage,
  // handleClick,
  uploadImage,
  error,
}) => {
  const fileInputRef = useRef < HTMLInputElement > null;

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageRemove = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the upload click

    setImage?.(null); // Remove image
  };
  return (
    <div>
      {title && <h4 className="title text-base font-semibold">{title}</h4>}
      <div className="mt-4">
        <div
          className={`relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-gray-700 bg-transparent text-center transition-all hover:bg-transparent ${
            !image ? "cursor-pointer" : "cursor-default"
          }`}
          onClick={!image ? handleUploadClick : undefined}>
          {image ? (
            <div
              style={{
                position: "relative",
                height: "100%",
                width: "100%",
              }}>
              <Image
                src={typeof image === "string" ? image : URL.createObjectURL(image)}
                alt="uploaded-img"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
              <Trash2
                onClick={handleImageRemove}
                // onClick={(e) => {
                //   e.stopPropagation();
                //   setImage && setImage(null);
                // }}
                className="w-8 h-8 cursor-pointer text-red-700 bg-white p-1 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          ) : (
            <div className="space-y-1 text-sm">
              <UploadCloud className="mx-auto h-6 w-6" />
              <p>Click to upload your image</p>
              <p className="text-gray-400">PNG, JPG, GIF up to 1MB</p>
            </div>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={uploadImage}
        />
      </div>
      {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
    </div>
  );
};

export default UploadImage;
```

- Preview
  ![alt text](image-2.png)
  ![alt text](image-1.png)

- Ahsan bhi Component

```javascript
"use client";

import { Trash2, UploadCloud } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";

interface UploadImageProps {
  title?: string;
  fileInputRef?: React.RefObject<HTMLInputElement>;
  image?: File | null | string;
  setImage?: (image: File | null | string) => void;
  uploadImage?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
}

const UploadImage: React.FC<UploadImageProps> = ({
  title,
  image,
  setImage,
  uploadImage,
  error,
}) => {
  const fileInputRef = useRef < any > null;
  return (
    <div>
      {title && <h4 className="title text-base font-semibold">{title}</h4>}
      <div className="mt-4">
        <div
          className={`relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-gray-700 bg-transparent text-center transition-all hover:bg-transparent ${
            !image ? "cursor-pointer" : "cursor-default"
          }`}
          onClick={() => {
            if (!image) {
              fileInputRef && fileInputRef.current ? fileInputRef.current?.click() : {};
            }
          }}>
          {image ? (
            <div
              style={{
                position: "relative",
                height: "100%",
                width: "100%",
              }}>
              <Image
                src={typeof image === "string" ? image : URL.createObjectURL(image)}
                alt="uploaded-img"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
              <Trash2
                onClick={(e) => {
                  e.stopPropagation();
                  setImage && setImage(null);
                }}
                className="w-8 h-8 cursor-pointer text-red-700 bg-white p-1 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          ) : (
            <div className="space-y-1 text-sm">
              <UploadCloud className="mx-auto h-6 w-6" />
              <p>Click to upload your image</p>
              <p className="text-gray-400">PNG, JPG, GIF up to 1MB</p>
            </div>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => uploadImage?.(e)}
        />
      </div>
      {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
    </div>
  );
};

export default UploadImage;
```
