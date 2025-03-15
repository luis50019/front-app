import { useEffect, useState } from "react";
import { profile } from "../api/user.js";


function Info() {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function getProfile() {
			try {
				const res = await profile();
				if (res) {
					console.log(res.data)
					setData(res.data.user);
				}
			} catch (e) {
				console.log(e);
			}
		}
		getProfile()
	}, [])

	return (<>
		<div className="w-full flex flex-col gap-10 h-[100vh] border-2">
			{
				data && data.map(user => (
					<span className="text-[#fff]">{user.email}</span>
				))
			}
		</div>

	</>);
}

export default Info;