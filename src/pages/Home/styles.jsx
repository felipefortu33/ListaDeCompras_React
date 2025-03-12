import styled from "styled-components";

export const Container = styled.div`
  background: #282c34;
  padding: 30px;
  border-radius: 12px;
  max-width: 450px;
  margin: 50px auto;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  flex: 1;
  height: 45px;
  border-radius: 8px;
  border: none;
  padding: 0 15px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
  background: #444;
  color: white;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border: 2px solid #2cb67d;
    background: #555;
  }
`;

export const AddButton = styled.button`
  background-color: #2cb67d;
  color: white;
  height: 45px;
  padding: 0 15px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #24a06b;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ProductList = styled.div`
  margin-top: 20px;
  text-align: left;

  .empty-message {
    color: #bbb;
    text-align: center;
    margin-top: 10px;
    font-style: italic;
  }
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-radius: 8px;
  margin-top: 15px;
  padding: 12px 15px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  p {
    text-transform: capitalize;
    font-weight: bold;
    font-size: 16px;
    color: #333;
  }
`;

export const TrashButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 22px;
  color: #d9534f;
  transition: color 0.2s, transform 0.2s;

  &:hover {
    color: #c9302c;
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const MarkButton = styled.button`
  background-color: #4CAF50; /* Verde */
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }

  &:active {
    transform: scale(0.95);
  }
`;
