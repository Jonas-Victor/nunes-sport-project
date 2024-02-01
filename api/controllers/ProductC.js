import { db } from "../db.js";

export const getProdutos = (_, res) => {
  const q = "SELECT * FROM produtos";

  db.query(q, (err, data) => {
    if (err) {
      console.error("Erro ao executar a consulta:", err);
      return res.status(500).json({ error: "Erro ao obter os produtos" });
    }

    return res.status(200).json(data);
  });
};


export const addProdutos = (req, res) => {
  const q = "INSERT INTO produtos(`nome`, `productDescription`, `productCode`, `priceProduct`) VALUES (?, ?, ?, ?)";

  const values = [
    req.body.nome,
    req.body.productDescription,
    req.body.productCode,
    req.body.priceProduct,
  ];

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Produto Adicionado com sucesso.");
  });
};


export const updateProdutos = (req, res) => {
  const q =
    "UPDATE Produtos SET `nome` = ?, `productDescription` = ?, `productCode` = ?, `priceProduct` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.productDescription,
    req.body.productCode,
    req.body.priceProduct,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteProdutos = (req, res) => {
  const q = "DELETE FROM produtos WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Produto deletado com sucesso.");
  });
};
