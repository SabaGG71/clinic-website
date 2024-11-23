import { servicesBox } from "../../../components/homeComponents/ServicesHome/servicesData";

export async function getStaticPaths() {
  const paths = servicesBox.map((service) => ({
    params: { serviceName: service.id.toString() },
  }));

  return { paths, fallback: false };
}

export default function ServicePage({ params }) {
  const service = servicesBox.find((service) => service.id === params.serviceName);

  return (
    <div>
      <h1>{service.h4}</h1>
      <p>{service.p}</p>
    </div>
  );
}