import ContentLoader from "react-content-loader"

export const MainContentLoaderLarge = () => {
    return (
        <ContentLoader width={"100%"} height={"670"}>
            <rect x="0" y="0" rx="4" ry="4" width="48%" height="290" />
            <rect x="52%" y="0" rx="4" ry="4" width="48%" height="290" />
            <rect x="0" y="310" rx="4" ry="4" width="48%" height="290" />
            <rect x="52%" y="310" rx="4" ry="4" width="48%" height="290" />
        </ContentLoader>
    )
}
export const MainContentLoaderSmall = () => {
    return (
        <ContentLoader width={"100%"} height={"670"}>
            <rect x="0" y="0" rx="4" ry="4" width="100%" height="200" />
            <rect x="0" y="220" rx="4" ry="4" width="100%" height="200" />
            <rect x="0" y="440" rx="4" ry="4" width="100%" height="200" />
        </ContentLoader>
    )
}
