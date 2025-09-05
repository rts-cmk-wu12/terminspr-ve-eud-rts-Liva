export default function newImageUrl(assetUrl) {
    return assetUrl.replace('http://localhost:4000/', process.env.NEXT_PUBLIC_BASE_URL);
};