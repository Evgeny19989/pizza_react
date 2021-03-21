import ContentLoader from "react-content-loader"

export default function PizzaLoader() {
return (
    <ContentLoader
        className='pizza-block'
        speed={2}
        width={282}
        height={460}
        viewBox="0 0 282 460"
        backgroundColor="#f5f0f0"
        foregroundColor="#ecebeb"
    >
        <circle cx="132" cy="132" r="132" />
        <rect x="0" y="310" rx="6" ry="0" width="280" height="26" />
        <rect x="0" y="348" rx="6" ry="0" width="280" height="76" />
        <rect x="0" y="439" rx="6" ry="0" width="90" height="24" />
        <rect x="158" y="436" rx="25" ry="25" width="130" height="32" />
    </ContentLoader>
)
}