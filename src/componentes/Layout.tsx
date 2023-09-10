
import styled from "styled-components"

export const Pokemon = styled.div`
  background-color: #eee;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  margin: 10px;
  padding: 20px;
  text-align: center;
`

export const ImageContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  text-align: center;
`

export const Image = styled.img`
  max-width: 90%;
  margin-top: 20px;
`

export const Info = styled.div`
  margin-top: 10px;
`

export const Id = styled.span`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 0.8em;
`

export const Name = styled.h3`
  margin: 15px 0 7px;
  letter-spacing: 1px;
`

export const Type = styled.small`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 5px;
  margin: 3px;
  border-radius: 10px;
  font-size: 0.8em;
`
