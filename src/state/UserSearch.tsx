import { useState } from "react";

const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 20 },
    { name: 'Micheal', age: 20 },
];

const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{ name: string, age: number } | undefined>();

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });
        console.log(foundUser);
        setUser(foundUser);
    };

    return (
        <div>
            User Search
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Search Users</button>
            <div>
                {/* 
                This is makes sure that user defined
                if doesn't defined it will not going to appear on the screen
                */}
                {user && user.name}
                {user && user.age}
            </div>
        </div>
    );
};

export default UserSearch;