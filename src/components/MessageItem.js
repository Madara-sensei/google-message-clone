import React from 'react'
import './MessageItem.css'
import { Avatar } from '@material-ui/core'
function MessageItem({me,message,photo}) {
    return (
        <div className="messageItem">
            {
               !me ?
                    (
                        <div className="messsageItem__other">
                            <Avatar src={photo}/>
                            <div className="messageItem__content">
                                <h4>{message}</h4>
                            </div>
                          

                        </div>
                    ):
                    (
                        <div className="messageItem__me">
                            <h4>{message}</h4>

                        </div>
                    )
            }

        </div>
    )
}

export default MessageItem
