import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './style';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt='Github Explorer' />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder='Digite o nome do repositório' />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href='test'>
          <img src="https://avatars.githubusercontent.com/u/44514009?v=4"
            alt="Wagner Reis"
          />

          <div>
            <strong>repositorio/react-test</strong>
            <p>Descrição qualquer</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href='test'>
          <img src="https://avatars.githubusercontent.com/u/44514009?v=4"
            alt="Wagner Reis"
          />

          <div>
            <strong>repositorio/react-test</strong>
            <p>Descrição qualquer</p>
          </div>

          <FiChevronRight size={20} />
        </a><a href='test'>
          <img src="https://avatars.githubusercontent.com/u/44514009?v=4"
            alt="Wagner Reis"
          />

          <div>
            <strong>repositorio/react-test</strong>
            <p>Descrição qualquer</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
};

export default Dashboard;
