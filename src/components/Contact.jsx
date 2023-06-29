import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Map from './Map';
import emailjs from '@emailjs/browser';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align :center;
`

const Container = styled.div`
    width :100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    gap:50px;
`

const Left = styled.div`
    flex:1;
    display: flex;
    justify-content:flex-end;
    align-items: center;
    // background-color:yellow;
`

const Form = styled.form`
  width :500px;
  display: flex;
  flex-direction : column;
  gap: 25px;
`

const Title = styled.h1`
  font-weight: 200;
`

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`
const Textarea= styled.textarea`
    padding: 20px;
    background-color: #e8e6e6;
    border: none;
    border-radius: 5px;
  
`
const Button = styled.button`
    background-color: #da4ea2;
    color: white;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    padding: 20px;
    
  
`
const Right = styled.div`
    flex:1;
    // background-color: pink;
    // width:200px;
    // height:100%;
`


const Contact=()=>{
    const ref=useRef()
    const [success, setSuccess]=useState(false)

    const handleSubmit= e =>{
        e.preventDefault();

        emailjs.sendForm('service_u0bvjk7', 'template_a0tts8p', ref.current, 'BOyy9X2aYnTUmuqth')
        .then((result) => {
            console.log(result.text);
            setSuccess(true);
        }, (error) => {
            console.log(error.text);
            setSuccess(false);
        });
    }
    return(
        <Section>
            <Container>
                <Left>
                    <Form ref={ref} onSubmit={handleSubmit}>
                        <Title>Contact Me</Title> 
                        <Input placeholder="Name" name="name"></Input>
                        <Input placeholder="Email" name="email"></Input>
                        <Textarea placeholder="Write yout message" name="message" rows={10}/>
                        {success && "Your message has been sent. We'll get back to you soon :)"}
                        <Button type="submit">Send</Button>
                    </Form>
                </Left>
                <Right>
                    <Map></Map>
                </Right>

            </Container>

        </Section>
    )


}

export default Contact;