import React, {useState} from "react"
import { Task } from './Task'
import { Header, Content, List, FormContainer, Form, TaskInput, AddButton } from './styles'

export const ToDo = () => {
    const [ text, setText ] = useState("")
    const listType : string[] = []
    const [ list, setList ] = useState(listType)
    const showValue = (e:any, text:string) => {
        e.preventDefault()
        setList([...list, text])
        console.log(text)
        console.log(list)
    }
    return ( 
        <div>
            <Header></Header>
            <Content>
                <List>
                    {
                        list.map((item, index) => (<Task isDone={false} isEdit={false} id={index} text={item} key={index}></Task>))
                    }
                    {/* <Task text={'hello world'} isDone={false} isEdit={false} id='0'></Task> */}
                </List>
                <FormContainer>
                    <Form>
                        <TaskInput value={text}  onChange={e => setText(e.target.value)} placeholder="Write your task"/>
                        <AddButton onClick={(e) => showValue(e, text)}>Add</AddButton>
                    </Form>
                </FormContainer>
            </Content>
       </div>
    )
}