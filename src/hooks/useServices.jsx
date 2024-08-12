import { useEffect, useState } from "react";

function useServices() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://car-doctor-server-puce-eta.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return services;
}

export default useServices;
