const EventComponent: React.FC = () => {

    /**
     * When we declare as 
     * (event) =>{} typeScript doesn't understands what it mean
     * we have to declare as (event: React.ChangeEvent<HTMLInputElement>)
     * @param event 
     */ 
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    };

    return (
        <div>
            <input type="text" onChange={onChange} />
        </div>
    );
};

export default EventComponent;