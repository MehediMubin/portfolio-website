import { jwtDecode } from "jwt-decode";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


const LoginPage = () => {
   const { register, handleSubmit } = useForm();
   const navigate = useNavigate();

   const onSubmit = async (data) => {
      console.log(data);

      try {
         const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
         });

         const responseData = await response.json();
         if (!responseData.success) {
            toast.error(responseData.message);
            return;
         }
         const token = responseData?.data?.accessToken;
         localStorage.setItem("token", token);
         // decode the token and check if the user is an admin
         const decodedToken = jwtDecode(token);
         console.log(decodedToken);
         toast.success("Logged in successfully.");
         navigate("/dashboard");
      } catch (error) {
         toast.error("An error occurred. Please try again later.");
      }
   };

   return (
      <div>
         <div className="h-screen-16 flex items-center justify-center bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 shadow-lg p-6 rounded-lg bg-white">
               <div>
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                     Sign in to Your Account
                  </h2>
               </div>
               <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-8 space-y-6"
               >
                  <div className="rounded-md shadow-sm space-y-4">
                     <div>
                        <label htmlFor="username" className="sr-only">
                           Username
                        </label>
                        <input
                           {...register("username")}
                           id="username"
                           type="text"
                           autoComplete="username"
                           required
                           className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:border-custom-focus focus:z-10 sm:text-sm"
                           placeholder="Username"
                        />
                     </div>
                     <div>
                        <label htmlFor="password" className="sr-only">
                           Password
                        </label>
                        <input
                           {...register("password")}
                           id="password"
                           type="password"
                           autoComplete="current-password"
                           required
                           className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:border-custom-focus focus:z-10 sm:text-sm"
                           placeholder="Password"
                        />
                     </div>
                  </div>
                  <div>
                     <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                     >
                        Sign in
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default LoginPage;
