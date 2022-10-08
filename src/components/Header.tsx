import React, { useReducer, useState } from "react"
import sls from "./Styles.module.scss"

const datesArray = ["Month", "Week", "Yesterday", "Today"]

const DateValue = ({ date }: any) => {
	const [isActive, setIsActive] = useState(false)
	return (
		<p
			onClick={() => setIsActive((prev) => !prev)}
			style={
				isActive ? { color: "blue" } : { color: "inherit" }
			}
			className={sls.date_element}
		>
			{date}
		</p>
	)
}

export const Header = () => {
	return (
		<div className={sls.MainHeader}>
			<div className={sls.pipelines}>
				<select name='pipelines_selector' id='1'>
					<option value='All'>All Pipelines</option>
					<option value='Sales'>Sales</option>
					<option value='Marketing'>Marketing</option>
					<option value='Partners'>Partners</option>
				</select>
			</div>
			<div className={sls.date_filter}>
				{datesArray.map((elem) => (
					<DateValue date={elem} />
				))}
			</div>
		</div>
	)
}
