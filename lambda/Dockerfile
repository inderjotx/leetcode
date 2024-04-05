FROM public.ecr.aws/lambda/nodejs:20.2024.03.04.09-x86_64

RUN microdnf install -y  python3 gcc-c++  

COPY lambda.mjs ${LAMBDA_TASK_ROOT}

CMD [ "lambda.handler" ]

