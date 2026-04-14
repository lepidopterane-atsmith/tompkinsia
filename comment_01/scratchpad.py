from simple_query import create_engine_from_files, word_search
import pandas as pd

query_engine = create_engine_from_files(urns=['ALL'])
results = word_search(query_engine, "ἀγκύλος")
csv_full = results.to_csv("bow_results.csv", index=False)