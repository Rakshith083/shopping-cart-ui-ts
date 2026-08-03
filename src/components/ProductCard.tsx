export default function ProductCard(props: any) {
    const { product: p } = props;
    return <div>
        <div className="flex p-2 shadow-lg rounded-lg flex-col">
            <img className="h-40 object-cover rounded" src={p.image} alt={p.name} />
            <h2 className="font-semibold text-xl">{p.name}</h2>
            <p className="text-sm text-gray-00">{p.description}</p>
            <p className="text-lg font-semibold">${p.price}</p>
        </div>
    </div>
}