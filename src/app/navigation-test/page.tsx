"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// o prefetch={false} é para não fazer prefetch da página (não carregar a página antes de clicar no link), é bom deixar desse jeito quando se tem muitos links na página
const NavigationTest = () => {
  const router = useRouter();
  const pathName = usePathname();
  const query = useSearchParams();

  const handleClick = () => {
    console.log(pathName);
    console.log(query.get("name"));
    // Também tem o query.set("name", "Lucas") para setar um valor
    console.log("Write and Redirect");
    router.push("/");
    // router.replace("/") para não deixar a página anterior no histórico
    // router.refresh() para recarregar a página
    // router.back() para voltar para a página anterior
    // router.forward() para avançar para a próxima página
  };

  return (
    <div>
      <Link href="/" prefetch={false}>
        Home
      </Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
};

export default NavigationTest;
