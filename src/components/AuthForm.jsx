import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(4, "Password must be at least 6 characters"),
<<<<<<< HEAD
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .optional(),
=======
  username: z.string().min(3, "Username must be at least 3 characters").optional(),
>>>>>>> ca8b104e78ea3a15d20737f94b791c41253d1b14
  otp: z.string().optional(),
});

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const handleErrorMessage = (result, fallback = "Something went wrong") => {
    if (typeof result.detail === "string") return result.detail;
    if (result.message) return result.message;
    if (typeof result.detail === "object") return JSON.stringify(result.detail);
    return fallback;
  };

  const mockApiCall = async (url, method, formData) => {
    // Mock the API calls
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url.includes("register")) {
          resolve({ ok: true, message: "OTP sent to your email." });
        } else if (url.includes("verify-otp")) {
          resolve({ ok: true, message: "OTP verified successfully." });
        } else if (url.includes("login")) {
          resolve({ ok: true, access_token: "mocked_access_token" });
        } else {
          reject(new Error("Unknown endpoint"));
        }
      }, 1000); // Simulating a delay
    });
  };

  const onSubmit = async (data) => {
    const formData = new FormData();

    if (isLogin) {
      formData.append("email", data.email);
      formData.append("password", data.password);

      try {
<<<<<<< HEAD
        const res = await mockApiCall(
          "http://localhost:8000/auth/login",
          "POST",
          formData
        );
        if (res.ok) {
          localStorage.setItem("auth_token", res.access_token);
          alert("Login successful!");
          navigate("/dash");
=======
        const res = await mockApiCall("http://localhost:8000/auth/login", "POST", formData);
        if (res.ok) {
          localStorage.setItem("auth_token", res.access_token);
          alert("Login successful!");
          navigate("/dashboard");
>>>>>>> ca8b104e78ea3a15d20737f94b791c41253d1b14
        } else {
          alert(handleErrorMessage(res, "Login failed"));
        }
      } catch (error) {
        alert(error.message);
      }
    } else {
      if (!otpSent) {
        formData.append("email", data.email);

        try {
<<<<<<< HEAD
          const res = await mockApiCall(
            "http://localhost:8000/auth/register",
            "POST",
            formData
          );
=======
          const res = await mockApiCall("http://localhost:8000/auth/register", "POST", formData);
>>>>>>> ca8b104e78ea3a15d20737f94b791c41253d1b14
          if (res.ok) {
            alert("OTP sent to your email.");
            setOtpSent(true);
          } else {
            alert(handleErrorMessage(res, "Error sending OTP."));
          }
        } catch (error) {
          alert(error.message);
        }
      } else {
        formData.append("email", data.email);
        formData.append("otp", data.otp);
        formData.append("username", data.username);
        formData.append("password", data.password);

        try {
<<<<<<< HEAD
          const res = await mockApiCall(
            "http://localhost:8000/auth/verify-otp",
            "POST",
            formData
          );
=======
          const res = await mockApiCall("http://localhost:8000/auth/verify-otp", "POST", formData);
>>>>>>> ca8b104e78ea3a15d20737f94b791c41253d1b14
          if (res.ok) {
            const loginForm = new FormData();
            loginForm.append("email", data.email);
            loginForm.append("password", data.password);

<<<<<<< HEAD
            const loginRes = await mockApiCall(
              "http://localhost:8000/auth/login",
              "POST",
              loginForm
            );
            if (loginRes.ok) {
              localStorage.setItem("auth_token", loginRes.access_token);
              alert("Account created & logged in successfully!");
              navigate("/dash");
            } else {
              alert(
                "OTP verified but auto-login failed. Please login manually."
              );
=======
            const loginRes = await mockApiCall("http://localhost:8000/auth/login", "POST", loginForm);
            if (loginRes.ok) {
              localStorage.setItem("auth_token", loginRes.access_token);
              alert("Account created & logged in successfully!");
              navigate("/dashboard");
            } else {
              alert("OTP verified but auto-login failed. Please login manually.");
>>>>>>> ca8b104e78ea3a15d20737f94b791c41253d1b14
              setIsLogin(true);
              setOtpSent(false);
            }
          } else {
            alert(handleErrorMessage(res, "OTP verification failed."));
          }
        } catch (error) {
          alert(error.message);
        }
      }
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
<<<<<<< HEAD
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: "#F4EBDC",
      }}
=======
      style={{ minHeight: "100vh", minWidth: "100vw" ,backgroundColor: "#F4EBDC" }}
>>>>>>> ca8b104e78ea3a15d20737f94b791c41253d1b14
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          width: 400,
          borderRadius: 3,
          backgroundColor: "#F4EBDC",
        }}
      >
        <Card>
          <CardHeader
            title={
              <Typography variant="h5" align="center" fontWeight="bold">
                {isLogin ? "Login" : otpSent ? "Verify OTP" : "Sign Up"}
              </Typography>
            }
          />
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box display="flex" flexDirection="column" gap={2}>
                {!isLogin && otpSent && (
                  <TextField
                    label="OTP"
                    {...register("otp")}
                    error={!!errors.otp}
                    helperText={errors.otp?.message}
                    fullWidth
                    style={{ backgroundColor: "#F4EBDC" }}
                  />
                )}
                {!isLogin && (
                  <TextField
                    label="Username"
                    {...register("username")}
                    error={!!errors.username}
                    helperText={errors.username?.message}
                    fullWidth
                    style={{ backgroundColor: "#3A506B", color: "white" }}
                  />
                )}
                <TextField
                  label="Email"
                  type="email"
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  fullWidth
                  style={{ backgroundColor: "#F4EBDC" }}
                />
                <TextField
                  label="Password"
                  type="password"
                  {...register("password")}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  fullWidth
                  style={{ backgroundColor: "#F4EBDC" }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  style={{ backgroundColor: "#3A506B", color: "#ffffff" }}
                >
<<<<<<< HEAD
                  {isLogin
                    ? "Login"
                    : otpSent
                    ? "Verify & Register"
                    : "Send OTP"}
=======
                  {isLogin ? "Login" : otpSent ? "Verify & Register" : "Send OTP"}
>>>>>>> ca8b104e78ea3a15d20737f94b791c41253d1b14
                </Button>
              </Box>
            </form>
            <Typography align="center" mt={2}>
              {isLogin ? (
                <>
                  Don't have an account?{" "}
                  <Button onClick={() => setIsLogin(false)}>Sign Up</Button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <Button onClick={() => setIsLogin(true)}>Login</Button>
                </>
              )}
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  );
}

export default AuthForm;
