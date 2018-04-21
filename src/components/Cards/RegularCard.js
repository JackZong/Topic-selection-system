import React from 'react'
import {
	Card,
	CardContent,
	CardHeader,
	CardActions
} from 'material-ui'
import PropTypes from "prop-types";
import Style from './regularcard.less'
import cx from 'classnames'
const RegularCard = ({...props}) => {
	const { content, plainCard, headerColor, cardTitle, cardIcon } = props
	const plainCardClasses = cx({
	  [" " + Style.cardPlain]: plainCard,
	  [Style.card]: true
	})
	const cardPlainHeaderClasses = cx({
	  [" " + Style.cardPlainHeader]: plainCard,
    [Style.cardHeader]: true,
    [Style[headerColor + "CardHeader"]]: true,
    [Style.cardHeaderIcon]: true
	})
	return (
      <Card className={plainCardClasses}>
        <CardHeader
          classes={{
            root: cardPlainHeaderClasses,
            title: Style.cardTitle,
            subheader: Style.cardSubtitle
          }}
          avatar={<props.cardIcon className={Style.icon}/>}
        />
        <CardContent>
         <h4 className={Style.cardTitle}>{cardTitle}</h4>
         {content}
        </CardContent>
      </Card>
	)
}
RegularCard.defaultProps = {
	headerColor: "purple"
}
RegularCard.propTypes = {
  plainCard: PropTypes.bool,
  headerColor: PropTypes.oneOf(["orange","green","red","blue","purple"]),
  cardTitle: PropTypes.node,
  cardSubtitle: PropTypes.node,
  content: PropTypes.node,
  footer: PropTypes.node
}
export default RegularCard