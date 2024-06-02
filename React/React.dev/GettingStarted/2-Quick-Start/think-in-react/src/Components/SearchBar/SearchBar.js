import './SearchBar.css';

export default function SearchBar({searchText, inStockOnly, onSearch, onStock}) {

    return (
        <>
            <input placeholder="Search..." className="search-input" type="text" value={searchText} onChange={(e) => onSearch(e.target.value)} />
            <input className="show-in-stock" type="checkbox" checked={inStockOnly} onChange={(e) => onStock(e.target.checked)} />
            Only show products in stock.
        </>
    );
}