// LikeButton.jsx

import React, { useState } from 'react'; // Importa a biblioteca React e a função useState para gerenciar o estado

const LikeButton = () => { // Declaração do componente LikeButton
  // Define o estado local do número de curtidas (likes) e se o botão foi curtido (liked)
  const [likes, setLikes] = useState(0); // Inicializa o estado das curtidas como 0
  const [liked, setLiked] = useState(false); // Inicializa o estado de "curtido" como falso

  // Função chamada quando o botão é clicado para curtir ou descurtir o post
  const handleLike = () => {
    if (!liked) { // Se o post não foi curtido
      setLikes(likes + 1); // Aumenta o número de curtidas em 1
      setLiked(true); // Define o estado de "curtido" como verdadeiro
    } else { // Se o post já foi curtido
      setLikes(likes - 1); // Diminui o número de curtidas em 1
      setLiked(false); // Define o estado de "curtido" como falso
    }
  };

  // Retorna a estrutura do componente
  return (
    <div>
      {/* Botão para curtir ou descurtir o post; executa a função handleLike quando clicado */}
      <button onClick={handleLike}>
        {/* Exibe o texto "Curtir" se o post não foi curtido, ou "Descurtir" se já foi */}
        {liked ? 'Descurtir' : 'Curtir'}
      </button>
      {/* Exibe o número de curtidas */}
      <span>{likes} {likes === 1 ? 'curtida' : 'curtidas'}</span>
    </div>
  );
};

export default LikeButton; // Exporta o componente LikeButton para ser utilizado em outros arquivos
