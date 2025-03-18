import styled from 'styled-components';

const SearchDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #423FA6;
    width: 50%;
    padding: 10px;
    border-radius: 100px;
`

const SearchField = styled.input`
    padding: 0.5em;
    border: none;
    border-radius: 100px;
    background-color: #423FA6; 
    color: white;
    width: 80%;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: white;
    }
`

const SearchIcon = styled.span`
    color: white;
    background-color: #423FA6;
    border-radius: 50%;
    padding: 5px;
    border: 1px solid rgba(85, 0, 16, 0.34);

    &:hover{
        cursor: pointer;
        background-color:rgb(67, 62, 192);
        border-color: #ADAAF0;
    }
`

function Searchbar(){
    return (
        <>
            <SearchDiv>
                <SearchField placeholder='Busque por vagas...'/>
                <SearchIcon className='material-symbols-outlined'>search</SearchIcon>
            </SearchDiv>
            
        </>
    )
}

export default Searchbar;