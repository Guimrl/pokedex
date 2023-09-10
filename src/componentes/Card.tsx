
import { Id, Image, ImageContainer, Info, Name, Pokemon, Type } from './Layout.tsx'

interface ICard {
  id: number;
  name: string;
  type: string;
  color: any;
}

const Card = ({ id, name, type, color }: ICard) => {
  const background = {
    backgroundColor: color
  }

  return (
    <>
      <Pokemon style={background}>
        <ImageContainer>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt={name}
          />
        </ImageContainer>
          <Info>
            <Id>#{id.toString().padStart(3, '0')}</Id>
            <Name>{name}</Name>
            <Type>{type[0]}</Type>
            {type[1] !== undefined ? (
               <Type>{type[1]}</Type>
            ) : (
              ''
            )}
        </Info>
      </Pokemon>
    </>
  )
}

export default Card;
