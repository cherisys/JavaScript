import Item from '../Item/Item';

export default function Category({category, items}) {
    const listItems = items.map((item, index) => 
        <Item key={index} item={item} />
    );
    return (
        <>
            <tr><td colSpan={2} className="heading">{category}</td></tr>
            {listItems}
        </>
    );
}