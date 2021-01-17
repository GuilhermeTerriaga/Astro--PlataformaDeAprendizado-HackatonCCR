import * as Yup from 'yup';
import User from '../models/User';
import File from '../models/File';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      years_old: Yup.date().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(8),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Erro de validação dos dados enviados' });
    }
    const userExists = await User.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.status(400).json({ error: 'Usuário já existe' });
    }
    // eslint-disable-next-line camelcase
    const { id, name, years_old, email } = await User.create(req.body);

    return res.json({
      id,
      name,
      years_old,
      email,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      years_old: Yup.date().required(),
      email: Yup.string().email().required(),
      oldPassword: Yup.string().required().min(8),
      password: Yup.string()
        .min(8)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      passwordConfirmation: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Erro de validação dos dados enviados' });
    }
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);
    if (email !== user.email) {
      const userExists = await User.findOne({
        where: { email },
      });
      if (userExists) {
        return res.status(400).json({ error: 'Usuário já existe ' });
      }
    }

    if (!(await user.checkPassword(oldPassword)) && oldPassword) {
      return res.status(401).json({ error: 'Senhas não batem' });
    }

    // eslint-disable-next-line camelcase
    const { id, name, years_old } = await user.update(req.body);
    return res.json({
      id,
      name,
      years_old,
      email,
    });
  }

  async index(req, res) {
    const userIndex = await User.findAll({
      attributes: ['id', 'name', 'email', 'years_old', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'foto',
          attributes: ['path', 'name', 'url'],
        },
      ],
    });
    return res.json(userIndex);
  }

  async indexOne(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Erro de validação dos dados enviados' });
    }
    const { email } = req.body;
    const userOne = await User.findAll({
      where: { email },
      attributes: ['id', 'name', 'email', 'years_old', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'foto',
          attributes: ['path', 'name', 'url'],
        },
      ],
    });
    if (userOne.length < 1) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }
    return res.json(userOne);
  }
}

export default new UserController();
