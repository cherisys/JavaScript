
export default function Item({item})
{
    return (
        <tr>
            <td style={{
                        color: item.stocked ? 'black' : 'red'
                       }}>
                {item.name}
            </td>
            <td>{item.price}</td>
        </tr>
    );
}