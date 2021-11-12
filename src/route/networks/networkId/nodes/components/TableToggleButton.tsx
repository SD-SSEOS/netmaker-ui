import React, { ReactNode } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { IconButton, Tooltip } from '@mui/material'
import { Block, Check } from '@mui/icons-material'
import { deleteIngressNode, deleteEgressNode } from '~modules/node/actions'
import { Node } from '~store/types'
import { encode64 } from '~util/fields'
import { Link } from 'react-router-dom'
import CustomDialog from '~components/dialog/CustomDialog'

const hoverRedStyle = {
    ':hover': {
      color: 'red'
    }
}

const hoverBlueStyle = {
  ':hover': {
    color: '#3f51b5'
  }
}

export const TableToggleButton: React.FC<{
  which: 'egress' | 'ingress' | 'relay',
  isOn: boolean,
  node: Node
  createText: string,
  removeText: string,
  SignalIcon: ReactNode,
  children?: ReactNode,
  withHistory?: boolean,
  onSelect: () => void,
}> = ({
    which,
    node,
    isOn,
    createText,
    removeText,
    SignalIcon,
    onSelect,
    withHistory, }) => {
  const dispatch = useDispatch()
  const [ hovering, setHovering ] = React.useState(false)
  const [ open, setOpen ] = React.useState(false)
  const { t } = useTranslation()

  const handleHoverEnter = () => setHovering(true)
  const handleHoverLeave = () => setHovering(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const removeAction = (which: string) => {
    switch(which) {
      case 'egress':
        dispatch(deleteEgressNode.request({
          netid: node.network,
          nodeMac: node.macaddress
        }))
        break
      case 'ingress':
        dispatch(deleteIngressNode.request({
          token: '',
          netid: node.network,
          nodeid: node.macaddress
        }))
        break
    }
  }

  return (<>
      <CustomDialog
          open={open}
          handleClose={handleClose}
          handleAccept={() => removeAction(which)}
          message={removeText}
          title={`${t('common.delete')} ${which}`}
        />
    <Tooltip placement='top' title={String(!isOn ? createText : removeText)}>
      {withHistory && !isOn? 
        <IconButton
          color={isOn ? 'success' : 'default'} 
          sx={isOn ? hoverRedStyle : hoverBlueStyle}
          component={Link}
          onClick={!isOn ? () => {} : handleOpen}
          to={`/networks/${node.network}/nodes/${encode64(node.id)}/create-${which}`}
          onMouseEnter={handleHoverEnter}
          onMouseLeave={handleHoverLeave}
        >
          {!isOn ? SignalIcon : hovering ? <Block /> : <Check />}
        </IconButton> : 
          <IconButton
          color={isOn ? 'success' : 'default'} 
          sx={isOn ? hoverRedStyle : hoverBlueStyle}
          onClick={!isOn ? onSelect : handleOpen}
          onMouseEnter={handleHoverEnter}
          onMouseLeave={handleHoverLeave}
        >
          {!isOn ? SignalIcon : hovering ? <Block /> : <Check />}
        </IconButton>}
      </Tooltip>
  </>)
}