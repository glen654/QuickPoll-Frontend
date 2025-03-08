import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../../components/AuthLayout";
import { useState } from "react";
import { AuthInput } from "../../components/AuthInput";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const naviagte = useNavigate();

  const handleSubmit = async () => {};
  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semiblod text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your details to log in
        </p>

        <form onSubmit={handleSubmit}>
          <AuthInput
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="john@example.com"
            type="text"
          />
        </form>
      </div>
    </AuthLayout>
  );
}
