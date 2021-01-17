import Question from '../models/Question';

class QuestionController {
  async answerQuestion(req, res) {
    const { option, tittle } = req.body;

    const question = await Question.findOne({
      where: { tittle },
    });
    if (!question) {
      return res.status(400).json({ error: 'Questão não encontrada' });
    }

    if (!(await question.checkOption(option))) {
      return res.json({ resposta: 'errada' });
    }
    return res.json({ resposta: 'certa' });
  }

  async index(req, res) {
    const index = await Question.findAll({
      attributes: ['id', 'tittle', 'options'],
    });
    return res.json(index);
  }
}

export default new QuestionController();
