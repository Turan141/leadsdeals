import React from "react"
import { Card } from "./Card"
import { Header } from "./Header"
import sls from "./Styles.module.scss"
import svg1 from "../assets/svgviewer-output.svg"
import svg2 from "../assets/svgviewer-output (1).svg"
import svg3 from "../assets/svgviewer-output (2).svg"
import svg4 from "../assets/svgviewer-output (3).svg"
import svg5 from "../assets/svgviewer-output (4).svg"
import svg6 from "../assets/svgviewer-output (5).svg"
import svg7 from "../assets/svgviewer-output (6).svg"
import svg8 from "../assets/svgviewer-output (7).svg"

const cardArray = [
	{
		icon: svg1,
		name: "Total Leads and Deals",
		qty: "1600",
		price: "132 000 999 $",
		color: "#C37ADD",
	},
	{
		icon: svg2,
		name: "Total Leads and Deals",
		qty: "1600",
		price: "132 000 999 $",
		color: "#C37ADD",
	},
	{
		icon: svg3,
		name: "Total Leads and Deals",
		qty: "1600",
		price: "132 000 999 $",
		color: "#63D422",
	},
	{
		icon: svg4,
		name: "Total Leads and Deals",
		qty: "1600",
		price: "132 000 999 $",
		color: "#63D422",
	},
	{
		icon: svg5,
		name: "Total Leads and Deals",
		qty: "1600",
		price: "132 000 999 $",
		color: "#F56C6C",
	},
	{
		icon: svg6,
		name: "Total Leads and Deals",
		qty: "1600",
		price: "132 000 999 $",
		color: "#F56C6C",
	},
	{
		icon: svg7,
		name: "Total Leads and Deals",
		qty: "1600",
		price: "132 000 999 $",
		color: "#2BBEF8",
	},
	{
		icon: svg8,
		name: "Total Leads and Deals",
		qty: "1600",
		price: "132 000 999 $",
		color: "#2BBEF8",
	},
]

export const Workspace = () => {
	return (
		<div className={sls.Workspace}>
			<Header />
			<div className={sls.CardWrapper}>
				{cardArray.map((elem) => (
					<Card
						icon={elem.icon}
						name={elem.name}
						qty={elem.qty}
						price={elem.price}
						color={elem.color}
					/>
				))}
			</div>
		</div>
	)
}
