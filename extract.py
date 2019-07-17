# Initial Variables Required
songs=[]
composer=[]
name=[]
start = 0
json=['[\n']
files = ["192kHz.txt","96kHz.txt","HiRes.txt","CD.txt"]

for file in files:
  source = open(file, "r", encoding='utf-16-le')
  text = source.readlines()
  source.close()

  # Extracting Song Details from Source file
  for line in text:
    line = line[49:]
    songs = line.split('.flac')[0]
    composer.append((songs.split(' - ')[0]).strip())
    name.append((songs.split(' - ')[1]).strip())

  # Sampling and HiRes Conditions
  if(file == "192kHz.txt"):
    HiRes = "true"
    Sampling = 192
  elif(file == "96kHz.txt"):
    HiRes = "true"
    Sampling = 96.0
  elif(file == "HiRes.txt"):
    HiRes = "true"
    Sampling = 44.1
  else:
    HiRes = "false"
    Sampling = 44.1

  end = len(name)
  
  # Formating Text for JSON file
  for i in range(start, end-1):
    json.append('\t{\n')
    json.append('\t\t"id":'+ str(i+1) + ',\n')
    json.append('\t\t"Name": "'+ name[i] +'",\n')
    json.append('\t\t"Composer": "'+ composer[i] + '",\n')
    json.append('\t\t"HiRes": '+ HiRes + ',\n')
    json.append('\t\t"Sampling": '+ str(Sampling) + '\n')
    json.append('\t},\n')
  start = end
json.append(']')
JSON = ""

# Joining Array Elements
for item in json:
  JSON+=item

# To avoid error during reading of JSON file
JSON = JSON[:len(JSON)-3]+'\n]'

destination = open("songs.json","w+")
destination.write(JSON)
destination.close()
