export default function LoginForm({ onLogin }) {

    function submitHandler(event) {
        event.preventDefault();
        const newUser = {
            username: event.target.username.value,
            password: event.target.password.value,
        };

        onLogin(newUser);
    }

    return (
        <div className="flex flex-col items-center p-5 text-xl font-semibold bg-teal justify-center w-4/6 mx-auto mt-8 rounded-md border-2 border-limegreen">
            <form onSubmit={submitHandler}>
                <p className="mx-auto mt-2">USER NAME</p>
                <input className="w-full mx-auto mt-2" placeholder="username" name="username" />
                <p className="mx-auto mt-2">PASSWORD</p>
                <input className="w-full mx-auto mt-2" type="password" name="password" placeholder="password" />
                <button className="flex flex-col rounded-md bg-darkgreen mt-4 mx-auto w-full">SIGN IN</button>
            </form>
        </div>
    );
}