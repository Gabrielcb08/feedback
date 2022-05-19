import { SubmitFeedbackUseCase } from "./SubmitFeedbackUseCase";

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        const submitFeedbackUseCase = new SubmitFeedbackUseCase(
            { create: async () => {}},
            { SendMail: async () => {}},
        );

        await expect(submitFeedbackUseCase.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'teste.jpg'
        })).resolves.not.toThrow()
    })
})