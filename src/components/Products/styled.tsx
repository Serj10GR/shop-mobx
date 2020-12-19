import styled from 'styled-components'

export const ProductsWrapper = styled.section`
  display: grid;
  justify-content: center;
  padding: 2em 10em;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 1rem;

  @media (max-width: 992px) {
    padding: 2em 3em
  }
`