export const Colleagues = ({colleagues}) => {
    return (
        <div>
            {colleagues.map((element, index) => {
                return (
                    <div key={index}>{element}</div>
                )
            })}
        </div>
    );
};
