FROM python:3.8.13

# Set environment variables
ENV PIP_DISABLE_PIP_VERSION_CHECK 1
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY ./requirements.txt .
RUN python3 -m pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . .
