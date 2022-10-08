import sls from "./Styles.module.scss"
import svg2 from "../assets/svgviewer-output (1).svg"
export const Card = ({
	icon,
	name,
	qty,
	price,
	color,
}: any) => {
	return (
		<div className={sls.CardBlock}>
			<div className={sls.card_icon}>
				<img
					src={icon ?? ""}
					width='56'
					alt='ElementIcon'
				/>
			</div>
			<div className={sls.card_data}>
				<div
					style={{ color: color }}
					className={sls.card_name}
				>
					{name ?? "Пусто"}
				</div>
				<div className={sls.card_values}>
					<p>{qty ?? "Пусто"}</p>
					<span>|</span>
					<p>{price ?? "Пусто"}</p>
				</div>
			</div>
		</div>
	)
}
