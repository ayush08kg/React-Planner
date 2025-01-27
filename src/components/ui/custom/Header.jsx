import React, { useEffect, useState } from "react";
import { Button } from "../button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { use } from "react";
import { Link, useNavigation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Header() {
  const [user, setUser] = useState(null);
  const [openDailog, setOpenDailog] = useState(false);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse the user object from localStorage
    }
  }, []); // Dependency array ensures it only runs once on component mount
  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });
  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDailog(false);
        window.location.reload();
      });
  };

  return (
    
    <div className="p-3 shadow-sm flex justify-between items-center bg-[#9bcdcb4e] rounded-3xl rounded-t-none ">
      <img src="/logo1.png" className="h-[60px] w-[60px]" alt="Logo" />
      <div>
        {user ? (
          <div className="flex items-center gap-3">

            <a href="/create-trip" className="text-black-500">
              <Button variant="outline" className="rounded-full p-4 text-white bg-[#5454dae0]">
                <span >+ Create Trip</span>
              </Button>
            </a>
            
            <a href="/my-trips" className="text-black-500">
              <Button variant="outline" className="rounded-full p-4 text-white bg-[#5454dae0]">
                <span >My Trips</span>
              </Button>
            </a>
            {/* Display user's profile picture */}

            <Popover>
              <PopoverTrigger className="bg-transparent">
                <img
                  src={user.picture} // Load picture from user object
                  alt={user.name} // Add an alt text for better accessibility
                  className="h-[35px] w-[35px] rounded-full"
                />
              </PopoverTrigger>
              <PopoverContent className=" w-[180px] text-white bg-red-500 hover:scale-105">
                <h2
                  className="cursor-pointer text-center"
                  onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Logout
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => setOpenDailog(true)} className="mr-5 bg-[#3636cae0] p-5 rounded-full font-medium hover:bg-white hover:text-black">
            Sign In
          </Button>
        )}
      </div>
      <Dialog open={openDailog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo1.png" alt="App Logo" className="h-20 w-20" />
              <h2 className="font-bold text-lg mt-7">Make Sure You're Signed In With Google</h2>
              <p>Sign in to the App with Google authentication securely.</p>
              <p>No more passwords to remember. Signing in is fast, simple and secure.</p>
              <Button
                onClick={login}
                className="w-full h-10 mt-5 flex gap-4 items-center rounded-full text-black bg-white border-gray-700 hover:text-white "
              >
                <FcGoogle className="h-7 w-7" />
                Sign In With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;
