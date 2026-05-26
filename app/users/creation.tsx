import { useForm} from "react-hook-form";
import { toast } from "sonner";


export default function UserCreation() {
    const { register, handleSubmit, reset } = useForm();

    const createUser = (data) => {
        console.log(data);
        fetch("http://localhost:3000/createUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            console.log(data);
            if(data.success) {
                toast.success("User created successfully!");
                reset();
            } else {
                toast.error("Error creating user!");
            }
        });
    };


    return (
    <div className="flex justify-start h-full w-full flex-col">
        <h1 className="text-2xl font-bold">Create User</h1>
        <hr className="border-gray-600 w-full" />
        <form className="w-100 h-full flex justify-start flex-col gap-4 p-10 text-black-300"
        onSubmit={handleSubmit(createUser)}
        >
            <div className="flex flex-col gap-2">
                <label className="" htmlFor="name">Name</label>
                <input className="w-full h-10 bg-gray-400 px-2" type="text" id="name" {...register("name")} />
            </div>
            <div className="flex flex-col gap-2">
                <label className="" htmlFor="age">Age</label>
                <input className="w-full h-10 bg-gray-400 text-gray-300 px-2" type="number" id="age" {...register("age")} />
            </div>
            <div className="flex flex-col gap-2">
                <label className="" htmlFor="gender">Gender</label>
                <select className="w-full h-10 bg-gray-400 px-2" id="gender" {...register("gender")}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                <label className="" htmlFor="dept">Department</label>
                <input className="w-full h-10 bg-gray-400 text-gray-300 px-2" type="text" id="dept" {...register("dept")} />
            </div>
            <div>
                <button className="w-full h-10 bg-olive-600 text-gray-300 hover:bg-olive-500" type="submit">Submit</button>
            </div>
        </form>
    </div>
    );
}