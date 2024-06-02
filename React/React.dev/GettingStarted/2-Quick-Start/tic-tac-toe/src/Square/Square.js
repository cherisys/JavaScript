
export default function Square({value, onClick}) {

    return (
        <button className="button-square" onClick={onClick}>
            {value}
        </button>
    );
}