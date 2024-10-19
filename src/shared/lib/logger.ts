import Pino from "pino";

export const logger = Pino();

export const loggedMethod = <A extends any[] = any[], R = any>({
  msg,
  logRes,
  logArgs,
  methodName,
}: {
  methodName: string;
  msg?: string;
  logArgs?: (...args: A) => unknown;
  logRes?: (res: R, ...args: A) => unknown;
}) => {
  return function loggedMethodDecorator<
    This,
    Args extends A,
    Return extends R | Promise<R>,
  >(target: (this: This, ...args: Args) => Return) {
    function replacementMethod(this: This, ...args: Args): Return {
      logger.info({
        methodName,
        args: logArgs?.(...args),
        msg: `Call ${methodName}: ${msg ?? ""}`,
      });
      const result = target.call(this, ...args);

      Promise.resolve(result)
        .then((awaited) => {
          logger.info({
            methodName,
            data: logRes?.(awaited, ...args),
            msg: `Result ${methodName}: ${msg ?? ""}`,
          });
        })
        .catch((error) => {
          logger.error({
            methodName,
            error,
            msg: `Error ${methodName}: ${msg ?? ""}`,
          });
        });

      return result;
    }

    return replacementMethod;
  };
};
