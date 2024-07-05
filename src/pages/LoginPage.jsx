import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const LoginPage = () => {
   const dispatch = useDispatch();
   const { register, handleSubmit } = useForm();
   const navigate = useNavigate();
   const [login] = useLoginMutation();

   const onSubmit = async (data) => {
      const toastId = toast.loading("Logging in");
      try {
         const res = await login(data).unwrap();
         const token = res?.data?.accessToken;
         const user = verifyToken(token);
         dispatch(setUser({ user, token }));

         toast.success("Login successful", { id: toastId, duration: 2000 });
         navigate("/dashboard");
      } catch (error) {
         toast.error("Invalid credentials", { id: toastId, duration: 2000 });
      }
   };

   return (
      <div className="h-screen-16 flex items-center justify-center bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 font-custom">
         <div className="max-w-md w-full space-y-8 shadow-lg p-6 rounded-lg bg-white">
            <div>
               <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Sign in to Your Account
               </h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
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
   );
};

export default LoginPage;
