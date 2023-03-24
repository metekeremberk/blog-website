import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Redirect({ slug }: { slug: string }) {
	const { push } = useRouter();

	useEffect(() => {
		push(slug);
	});

	return <></>;
}
